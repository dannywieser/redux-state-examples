import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateItem } from "./store";

let renders = 0;
function addRender() {
  renders++;
  console.log(`total renders: ${renders}`);
}

let updateIndex = 1;

const ListItem = ({ item }) => {
  addRender();
  const { value = "" } = item;
  return <li>{value}</li>;
};

function ListBoundToMapBase({ byId, updateItem }) {
  addRender();
  return (
    <div>
      <button
        onClick={() => {
          updateItem(updateIndex);
          updateIndex++;
        }}
      >
        do update
      </button>
      <ol>
        {byId.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </ol>
    </div>
  );
}

const mapStateToProps = state => ({
  byId: Object.values(state.items.byId),
  allIds: state.items.allIds
});

const mapDispatchToProps = dispatch => ({
  updateItem: bindActionCreators(updateItem, dispatch)
});

export const ListBoundToMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBoundToMapBase);
