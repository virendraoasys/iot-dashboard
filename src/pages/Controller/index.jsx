import {useState} from "react"
// import ControllerModal from './modal/ControllerModal';
import DeleteAlert from './modal/Delete/DeleteAlert';
import SendEmail from "./Email/Email";
import AddController from "./AddController/AddController"
import ControllerCard from './ControllerCard'
import CustomButton from '../Common/button/CustomButton'
import plus from '../../assets/iotimages/plusIcon.png';
import deleteicon from '../../assets/iotimages/delete-pic.png';
import emailicon from '../../assets/iotimages/email-pic.png';
import filterIconLarge from '../../assets/iotimages/filterIconLarge.png';

 const data = [
        {
            userName: "Sachin Das A",
            batteryLevel: 60,
            powerStatus: "Power Failure failure",
            isOnline: true,
            lastUpdate: "10-09-2025 | 19:00:31",
            lastUpdateRight: "21-08-2025 15:25:51",
            voltageData: {
                R: { voltage: 249, current: 0 },
                Y: { voltage: 244, current: 0 },
                B: { voltage: 248, current: 0 }
            },
            metrics: {
                tank: 0,
                flowMeter: 0,
                valve: 0,
                multi: 0
            }
        },
        {
            userName: "Sachin Das B",
            batteryLevel: 60,
            powerStatus: "Power Failure",
            isOnline: true,
            lastUpdate: "10-09-2025 | 19:00:31",
            lastUpdateRight: "21-08-2025 15:25:51",
            voltageData: {
                R: { voltage: 249, current: 0 },
                Y: { voltage: 244, current: 0 },
                B: { voltage: 248, current: 0 }
            },
            metrics: {
                tank: 0,
                flowMeter: 0,
                valve: 0,
                multi: 0
            }
        },
        {
            userName: "Sachin Das C",
            batteryLevel: 60,
            powerStatus: "Power Failure",
            isOnline: true,
            lastUpdate: "10-09-2025 | 19:00:31",
            lastUpdateRight: "21-08-2025 15:25:51",
            voltageData: {
                R: { voltage: 249, current: 0 },
                Y: { voltage: 244, current: 0 },
                B: { voltage: 248, current: 0 }
            },
            metrics: {
                tank: 0,
                flowMeter: 0,
                valve: 0,
                multi: 0
            }
        },
        {
            userName: "Sachin Das D",
            batteryLevel: 60,
            powerStatus: "Power Failure",
            isOnline: true,
            lastUpdate: "10-09-2025 | 19:00:31",
            lastUpdateRight: "21-08-2025 15:25:51",
            voltageData: {
                R: { voltage: 249, current: 0 },
                Y: { voltage: 244, current: 0 },
                B: { voltage: 248, current: 0 }
            },
            metrics: {
                tank: 0,
                flowMeter: 0,
                valve: 0,
                multi: 0
            }
        },
        {
            userName: "Sachin Das E",
            batteryLevel: 60,
            powerStatus: "Power Failure",
            isOnline: true,
            lastUpdate: "10-09-2025 | 19:00:31",
            lastUpdateRight: "21-08-2025 15:25:51",
            voltageData: {
                R: { voltage: 249, current: 0 },
                Y: { voltage: 244, current: 0 },
                B: { voltage: 248, current: 0 }
            },
            metrics: {
                tank: 0,
                flowMeter: 0,
                valve: 0,
                multi: 0
            }
        },
        {
            userName: "Sachin Das F",
            batteryLevel: 60,
            powerStatus: "Power Failure ",
            isOnline: true,
            lastUpdate: "10-09-2025 | 19:00:31",
            lastUpdateRight: "21-08-2025 15:25:51",
            voltageData: {
                R: { voltage: 249, current: 0 },
                Y: { voltage: 244, current: 0 },
                B: { voltage: 248, current: 0 }
            },
            metrics: {
                tank: 0,
                flowMeter: 0,
                valve: 0,
                multi: 0
            }
        }
    ]

const Controller = () => {

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const handleEmailToggle = () => {
    setShowEmailModal(!showEmailModal);
  };
    const [showAddController, setShowAddController] = useState(false);
    const handleAddControllerToggle = () => {
        setShowAddController(!showAddController);
    };
   

const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowDeleteAlert(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteAlert(false);
    setItemToDelete(null);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful deletion
      console.log('Item deleted:', itemToDelete);
      setShowDeleteAlert(false);
      setItemToDelete(null);
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setIsDeleting(false);
    }
  };

    const addBTnStyle = {
        background: '#2C67BA',
        padding: '5px 12px',
        borderRadius: '50px',
    };
    const deleteBtnStyle = {
        background: '#F3494C',
        padding: '5px 12px',
        borderRadius: '50px',
    };

    const EmailBtnStyle = {
        background: "#1E1E1E",
        padding: '5px 12px',
        borderRadius: '50px',
    };

    const FilterBtnStyle = {
        background: "#FFFFFF",
        padding: '5px 12px',
        borderRadius: '50px',
        borderWidth: '10px',
    };


    return (
        <div className="controller-page">
            <div className="d-flex justify-content-between align-items-center">
                <div className="page-heading">Controller</div>
                <div className="select-sec d-flex gap-2">
                    <CustomButton
                        image={filterIconLarge}
                        label="Filter"
                        color="transparent"
                        style={FilterBtnStyle}
                        // onClick={() => handleDeleteClick({ id: 1, name: 'Controller 1' })}
                    />
                    <CustomButton
                        image={emailicon}
                        label="Email"
                        color="transparent"
                        style={EmailBtnStyle}
                        onClick={handleEmailToggle}
                    />
                    <CustomButton
                        image={plus}
                        label="Add Controller"
                        color="transparent"
                        style={addBTnStyle}
                        onClick={handleAddControllerToggle}
                    />
                    <CustomButton
                        image={deleteicon}
                        label="Delete Controller"
                        style={deleteBtnStyle}
                        color="transparent"
                        onClick={() => handleDeleteClick({ id: 1, name: 'Controller 1' })}
                    />
                </div>
            </div>
            <div className=" mt-3">

                {/* Controller Modal */}
                <AddController isOpen={showAddController} toggle={handleAddControllerToggle} />

                {/* Email Modal */}
                <SendEmail isOpen={showEmailModal} toggle={handleEmailToggle} />

                {/* Delete Alert Modal */}
                <DeleteAlert
                    isOpen={showDeleteAlert}
                    onClose={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                    title="Delete Controller"
                    message="Are you sure you want to delete this controller?"
                    itemName={itemToDelete?.name}
                    isLoading={isDeleting}
                />
                <div className="controller-cards">
                    {data?.map((e) => (
                        <div key={e.userName} className="">
                            <ControllerCard
                                userName={e.userName}
                                batteryLevel={e.batteryLevel}
                                powerStatus={e.powerStatus}
                                isOnline={e.isOnline}
                                lastUpdate={e.lastUpdate}
                                lastUpdateRight={e.lastUpdateRight}
                                voltageData={e.voltageData}
                                metrics={e.metrics}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Controller;