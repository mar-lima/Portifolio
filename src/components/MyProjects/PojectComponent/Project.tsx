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
              id="card"
              key={item.id}
              cardwind={modal}
              onMouseUp={() => handleOpenModal(item.id)}>
              <S.CardDetails>
                <div className="smoke">
                  <h2>{item.title}</h2>
                  <img src={item.img} alt="" />
                </div>
              </S.CardDetails>

              <S.ViewHover id="view-area">
                <Button btn="Ver mais?" />
              </S.ViewHover>
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
                <S.modalArea id="modalarea">
                  <h2>{item.title}</h2>
                  <S.Area>
                    <S.AreaImg>
                      <img src={item.img} alt="" />
                      <S.Buttons>
                        <Button btn="Acessar projeto  " href={item.porject} />
                        <Button
                          btn="Acessar repositório"
                          href={item.repository}
                        />
                        <Button
                          btn="Ver post no Linkedin"
                          href="https://www.linkedin.com/in/marcelo-lima-05b062211/"
                        />
                      </S.Buttons>
                    </S.AreaImg>
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
