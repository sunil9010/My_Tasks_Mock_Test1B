import './index.css'

const TabsList = props => {
  const {tabsDetails, filterTask, isActive, onFilterEvent} = props
  const {displayText} = tabsDetails
  const getFiltered = () => {
    filterTask(displayText)
  }
  console.log(isActive)

  const style = isActive ? 'active-button' : 'button1'
  return (
    <li className="li">
      <button type="button" className={style} onClick={getFiltered}>
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
