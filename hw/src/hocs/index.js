import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorComponent from "../components/error-component";
import { SwapiServiceConsumer } from "../context";

const withData = (View, getDataList) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      getDataList().then(this.onDataLoaded).catch(this.onError);
    }

    onDataLoaded = (data) => {
      this.setState({
        data,
        loading: false,
      });
    };

    onError = () => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorComponent />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

const withChildFunction = (Wrapped, fn) => {
  return (props) => <Wrapped {...props}>{fn}</Wrapped>;
};

const withService = (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return <Wrapped {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export { withData, withChildFunction, withService };
