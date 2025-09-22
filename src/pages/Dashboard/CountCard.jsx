import PropTypes from 'prop-types';

const CountCard = ({
    image="",
    name="",
    count="",
    style={},
    iconStyle={}
})=>{
    return(
        <div className="d-flex align-items-center dashboard-count-card" style={style}  >
            <div className="icon-sec me-2" style={iconStyle}>
                <div className="icon">
                    <img src={image} alt="icons" />
                </div>
            </div>
            <div className="name-sec">
                <div className="name">{name}</div>
                <div className="count">{count}</div>
            </div>
        </div>
    )
}

CountCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  iconStyle: PropTypes.object,
};
export default CountCard;