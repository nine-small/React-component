import React from "react";
import PropTypes from "prop-types";

const datasType = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
).isRequired;


export default function HandleDatas(Comp) {
  return class WrapData extends React.Component {
    // 属性验证
    static propTypes = {
      datas: datasType,
    };

    render() {
       return  this.props.datas.map((el) => {
            return <Comp info={el} {...this.props} key={el.value}/>;
          });
    }
  };
}
