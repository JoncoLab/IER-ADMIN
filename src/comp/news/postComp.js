import React, { Component } from 'react';

export class Post extends Component {
    render() {
        return (
            <div>
                <button className="addPost">+</button>
                <div className="postBlock">
                    <input type="radiobutton" id="newsRadio" value="Новини" />
                    <input type="radiobutton" id="anounRadio" value=" Анонси" />
                    <input type="text" id="imgSrc" placeholder="Ссилка на картинку" />
                    <input type="text" id="contentCaption" placeholder="Заголовок" required />
                    <input type="text" id="contentText" placeholder="Зміст" required />
                </div>
            </div>
        );
    }
}