import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { itemType } from "../../../data/items";
import { items } from "../../../data/items";
import Button from "../../Ui/Button/Index";
import * as S from "./style";
const Project = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState<itemType[]>([]);

  const handleOpenModal = (item: any) => {
    var json = [];
    json.push(items[item]);
    setFilter(json);
    setModal(true);
    console.log(modal);
  };
  const handleCloseModal = () => {
    setModal(false);
    console.log(modal);
  };

  return (
    <>
      <S.container>
        <S.MainArea id="asdasdad">
          {items.map((item) => (
            <S.Card
              id="asd"
              key={item.id}
              cardwind={modal}
              onMouseUp={() => handleOpenModal(item.id)}>
              <div className="detail">
                <img src={item.img} alt="" />
                <div className="smoke"></div>
              </div>
              <div className="view-hover">
                <Button btn="Ver mais?" />
              </div>
            </S.Card>
          ))}
        </S.MainArea>

        {modal &&
          filter.map((item) => (
            <S.CardModal key={item.id} cardwind={modal}>
              <S.contain>
                <div className="btn-area">
                  <div className="close" onMouseUp={handleCloseModal}>
                    <RiCloseCircleFill />
                  </div>
                </div>
                <S.modalArea>
                  <h2>{item.title}</h2>
                  <S.Area>
                    <div className="img">
                      <img src={item.img} alt="" />
                      <div className="btn">
                        <Button btn="Acessar projeto  " href={item.porject} />
                        <Button
                          btn="Acessar repositório"
                          href={item.repository}
                        />
                        <Button
                          btn="Ver post no Linkedin"
                          href="https://www.linkedin.com/in/marcelo-lima-05b062211/"
                        />
                      </div>
                    </div>
                    <div className="description">
                      <span>{item.description}</span>
                    </div>
                  </S.Area>
                </S.modalArea>
              </S.contain>
            </S.CardModal>
          ))}
      </S.container>
    </>
  );
};

export default Project;
