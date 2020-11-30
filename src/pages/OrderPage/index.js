import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";

class OrderPage extends React.Component {
  componentDidMount() {
    this.props.loadOrders();
    // this.setState({ loading: true });
    // axios
  }

  render() {
    //console.log(this.state.orders);
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { loadOrders: () => dispatch(actions.loadOrders()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
