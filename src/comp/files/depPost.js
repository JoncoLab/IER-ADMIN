import React, { Component } from 'react';

export class DepPost extends Component {
    render() {
        return (
            <div className="depPost">
                <button>+</button>
                <div>
                    <input type="file" multiple placeholder="Виберіть файли для завантаження" required />
                    <select placeholder="Виберіть кафедру" required>
                        <option id="ier">Кафедра міжнародних економічних відносин</option>
                        <option id="iep">Кафедра міжнародної політики</option>
                        <option id="linc">Кафедра прикладної лінгвістики</option>
                        <option id="tapt">Кафедра теорії та практики перекладу</option>
                    </select>
                </div>
            </div>
        );
    }
}