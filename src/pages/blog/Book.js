import React from "react";
import { BookItem } from "./components/BookItem";
import { getBook } from "../../api/books";
import Spinner from "../../components/Spinner";

class Book extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false
  };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    let bookId = params.id;
    console.log(params);
    getBook(bookId)
      .then((response) => {
        this.setState({ loading: false, data: response.data });
      })
      .catch((error) => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const { loading, error, data } = this.state;
    console.log(data);
    return (
      <div>
        {loading && <Spinner />}
        {!loading && data && (
          <div className="col-md-12 my-4">
            <BookItem book={data} />
          </div>
        )}
        {!loading && error && (
          <div className="alert alert-danger">
            <strong>Danger!</strong> Indicates a dangerous or potentially
            negative action.
          </div>
        )}
      </div>
    );
  }
}
export { Book };
