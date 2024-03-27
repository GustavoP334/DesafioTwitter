import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { getDatabase, ref, runTransaction } from "firebase/database";
import { jwtDecode } from "jwt-decode";

const Like = (props) => {
    const [liked, setLiked] = useState(false);

    const user = jwtDecode(localStorage.getItem("access-token"));

    useEffect(() => {
      if(typeof props.whoLikes === "object" && props.whoLikes.includes(user.user_id)){
        setLiked(true);
      }else{
        setLiked(false);
      }
    }, [props.whoLikes, user.user_id]);

    const handleLike = () => {
        updateLikes(props.userId, props.aluritterId)
    };

    function updateLikes(userId, aluriteId) {
        const db = getDatabase();
        const aluriteRef = ref(db, `/${userId}/${aluriteId}/likes`);
    
        runTransaction(aluriteRef, (currentAlurite) => {
            // Inicializa currentAlurite se não for um objeto ou é nulo
            if (typeof currentAlurite !== 'object' || currentAlurite === null) {
                currentAlurite = {
                    likes: 0,
                    whoLikes: []
                };
            }

            // Garante que whoLikes seja um array
            currentAlurite.whoLikes = currentAlurite.whoLikes || [];

            if (currentAlurite.whoLikes.includes(user.user_id)) {
                // Remove o ID do usuário do array whoLikes
                currentAlurite.whoLikes = currentAlurite.whoLikes.filter(id => id !== user.user_id);
                
                // Decrementa o número atual de likes
                currentAlurite.likes = (currentAlurite.likes || 0) - 1;
            } else {
                // Adiciona o ID do usuário ao array whoLikes
                currentAlurite.whoLikes.push(user.user_id);
                
                // Incrementa o número atual de likes
                currentAlurite.likes = (currentAlurite.likes || 0) + 1;
            }

            return currentAlurite;
            
        }).catch((error) => {
            console.error('Erro ao atualizar likes:', error);
        });
    }
  
    return (
      <div className="cursor-pointer" onClick={() => handleLike()} >
        {liked ? (
          <FontAwesomeIcon icon={fas.faHeart} />
        ) : (
          <FontAwesomeIcon icon={far.faHeart} />
        )}
        {' '}
        {props.likes}
      </div>
    )
}

export default Like;