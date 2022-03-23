import './index.css'

const BrowserHistory = props => {
  const {browserDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="browser-card">
      <div className="time-container">
        <p className="time">{timeAccessed} </p>
      </div>

      <div className="details-container">
        <img src={logoUrl} className="logo-img" alt="domain logo" />
        <h1 className="heading" key="title">
          {title}
        </h1>
        <p className="domain-name">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
            testid="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
