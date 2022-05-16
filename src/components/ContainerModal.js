import useUsers from "../hooks/useUsers.js";
import useUser from "../hooks/useUser.js";
import { Modal } from "antd";
import { useState, useCallback } from "react";

function InfoModal({ visible, userId, ...rest }) {
  const { data, loading, error } = useUser(userId);
  if (loading) return "Loading...";
  return (
    <Modal visible={visible} {...rest}>
      {error && "Failed."}
      {data && (
        <div>
          <h4>{data.name}</h4>
          <p>{data.introduction}</p>
        </div>
      )}
    </Modal>
  );
}

function InfoModalBox({ visible, ...rest }) {
  if (!visible) return null;
  return <InfoModal visible {...rest}></InfoModal>;
}

export default () => {
  const [visibleId, setVisibleId] = useState(null);
  const { data, loading, error } = useUsers();
  const showModal = useCallback((id) => {
    setVisibleId(id);
  }, []);
  const hideModal = useCallback(() => {
    setVisibleId(null);
  }, []);
  if (!data || loading) {
    return <>Loading...</>;
  }
  return (
    <div>
      {error && "Fetch Failed."}
      {data && (
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <a href="#" onClick={() => showModal(item.id)}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <InfoModalBox
        visible={!!visibleId}
        userId={visibleId}
        onOk={hideModal}
        onCancel={hideModal}
      ></InfoModalBox>
    </div>
  );
};
