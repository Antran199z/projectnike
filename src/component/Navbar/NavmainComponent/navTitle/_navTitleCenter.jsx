import React, { useState } from "react";
import { NAVBAR_TITLE } from "../../NavmainComponent/interfaces/_constant"
const NavTitleCenter = ({ ...props }) => {
  const header = [
    { id: 1, label: "New & Feature" },
    { id: 2, label: "Men" },
    { id: 3, label: "Women" },
    { id: 4, label: "Kids" },
    { id: 5, label: "Sale" },
    { id: 6, label: "SNKRS" },
  ];
  const [showTitle, setshowTitle] = useState(false);
  const [list, setList] = useState();
  const handleMouseEnter = (index) => {
    setshowTitle(true);
    setList(NAVBAR_TITLE[index]);
  };
  const handleMouseLeave = () => {
    setshowTitle(false);
    setList("");
  };
  const renderHTML = () => {
    if (header) {
      return header.map((item, i) => {
        return (
          <div className="nav-title-list-header_hover">
            <div
              // style={{ marginRight: "60px" }}
              key={item.id}
              className="nav-title-list-header"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.label}</span>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <div className="menu_main">{renderHTML()}</div>
      {showTitle ?
        <ListItem list={list} />
        : ""}
    </div>
  );
};
const ListItem = ({ ...props }) => {
  const { listTop, listBottom } = props.list;
  const renderList = () => {
    if (listTop?.length > 0) {
      return listTop?.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.title}</h4>
            {item?.list.length > 0
              ? item?.list.map((map) => <div>{map}</div>)
              : ""}
          </div>
        );
      });
    }
  };
  const renderBottom = () => {
    if (listBottom?.length > 0) {
      return listBottom?.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.title}</h4>
            {item?.list.length > 0
              ? item?.list.map((map) => <div>{map}</div>)
              : ""}
          </div>
        );
      });
    }
  }
  return (
    <div class="bird">
      <div className="menu_main_body">
        <div className="menu_title">{renderList()}</div>
        {listBottom?.length > 0 ? <div className="menu_title">
          {renderBottom()}
        </div> : ""}
      </div>
    </div>
  )
};

export default NavTitleCenter;