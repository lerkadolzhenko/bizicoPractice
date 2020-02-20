import React from "react"
import { BookItem } from "./components/BookItem"
import { getBooks } from "../../api/books"
import Pagination from "../../components/Pagination"
import Spinner from "../../components/Spinner"
import SelectItemsPerPage from "./components/SelectItemsPerPage"
import SelectBookName from "./components/SelectBookName"

class Blog extends React.Component {
  state = {
    loading: true,
    data: [],
    error: false,
    currentPage: 1,
    itemsPerPage: 30,
    searchText: ""
  }

  handleInputBookName = (bookName) => {
    this.setState({
      searchText: bookName
    })
  }

  handleSelectItemsChange = (selectedItem) => {
    console.log(selectedItem)
    this.setState({
      itemsPerPage: Number(selectedItem)
    })
  }

  handlePageChange = (pageNumber) => {
    if (this.state.active === pageNumber) {
      this.setState({ currentPage: "" })
    } else {
      this.setState({ currentPage: pageNumber })
    }
    this.setState({
      currentPage: Number(pageNumber)
    })
  }

  componentDidMount() {
    this._isMounted = true
    getBooks()
      .then((response) => {
        this.setState({ loading: false, data: response.data })
      })
      .catch((error) => {
        this.setState({ loading: false, error: true })
      })
  }

  render() {
    const {
      loading,
      error,
      data,
      currentPage,
      itemsPerPage,
      searchText
    } = this.state

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    
    const filteredMappedItems = currentItems
      .filter((book) =>
        book.Title.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((book) => (
        <div
          key={book.ID}
          className="d-inline-block col-lg-4 col-md-6 col-xs-12 py-3">
          <BookItem book={book} key={book.ID} isDetailPage />
        </div>
      ))

    return (
      <div className="col-md-12">
        {loading && <Spinner />}

        <div className="row pt-3 px-3">
          <SelectItemsPerPage
            onSelectValueItems={this.handleSelectItemsChange}
          />
          <SelectBookName
            searchText={searchText}
            onInputBookName={this.handleInputBookName}
          />
        </div>
        {!loading && data.length > 0 && filteredMappedItems}
        {!searchText && (
          <Pagination
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            arrayOfItems={data}
          />
        )}
        {!loading && searchText && filteredMappedItems.length === 0 && (
          <h3 className='mx-auto pt-3' align='center'>Books Not Found</h3>
        )}
        {!loading && error && (
          <div className="alert alert-danger">
            <strong>Danger!</strong> Indicates a dangerous or potentially
            negative action.
          </div>
        )}
      </div>
    )
  }
}
export { Blog }
