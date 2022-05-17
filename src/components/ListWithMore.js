import { Popover } from "antd";
import data from "../data/PopoverData.js";
function MorePopover({ renderItem, data, max }) {
  const elements = data.map((item) => renderItem(item));
  const show = elements.slice(0, max);
  const hide = elements.slice(max);
  return (
    <div>
      {show}
      <Popover content={hide}>
        <div>{hide.length}" more"</div>
      </Popover>
    </div>
  );
}

export default () => {
  return (
    <div>
      <MorePopover
        renderItem={(user) => {
          return <span>{user.name}</span>;
        }}
        data={data}
        max={3}
      />
      <br />
      <MorePopover
        renderItem={(user) => {
          return <span>{user.name}</span>;
        }}
        data={data}
        max={5}
      />
    </div>
  );
};
