import {Container, Grid, makeStyles, React, useEffect, useHistory, useState,} from "../component"
import MUIDataTable from "mui-datatables";
import {appNotification} from "../shared/notification/app-notification";
import {doAssignLabConsultation, doGetPendingLabConsultations} from "./labConsultationDispatcher";
import {confirmMessageService} from "../shared/confirm/confirm-message-service";
import Button from '@material-ui/core/Button';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {useDispatch} from "react-redux";
import {errorHandler} from "../shared/common-helpers";
import {useGlobalStyles} from "../styles/GlobalStyles";



function PendingLabConsultations() {

    const classes = useGlobalStyles();
    const history = useHistory();

    const [data, setData] = useState([]);

    const [requests, setRequests] = useState([]);
    const columns = [

        {
            name: "Order ID",
            options: {
                filter: true,
            }
        },
        {
            name: "service",
            options: {
                filter: true,
            }
        },
        {

            name: "Quantity",
            options: {
                filter: true,
            }
        },
        {

            name: "Amount OF Data",
            options: {
                filter: true,
            }
        },
        {

            name: "Isolation",
            options: {
                filter: true,
            }
        },
        
        {

            name: "Analysis",
            options: {
                filter: true,
            }
        },
        {

            name: "Status",
            options: {
                filter: true,
            }
        },
        {
            name: 'Actions',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex) => {

                    return <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AssignmentIndIcon/>}
                        onClick={() => {
                            onAssignToMeClicked(dataIndex)
                        }}
                    >
                        Assign to Me
                    </Button>

                },
            }
        }

    ];


    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'standard',
        selectableRows: 'none',

    };


    async function onAssignToMeClicked(index) {
        const pendingRequest = requests[index]


            await confirmMessageService.show("Do you want to Assign yourself for Consultaion " + pendingRequest.service + "?")

            doAssignLabConsultation(pendingRequest.orderID).subscribe((res) => {
                appNotification.showSuccess("Request Assigned to you, Please update your diagnosis details.")

                history.push("/update-labConsultation/" + pendingRequest.orderID)

            }, errorHandler);




    }



    function reloadPendingLabConsultations() {

        doGetPendingLabConsultations()
            .subscribe((pendingLabConsultations) => {


                setRequests(pendingLabConsultations)
                const buffer = pendingLabConsultations.map(item => {

                    const {result} = item.labResult
                    return [item.orderID,item.service,item.quantity,item.amountOfData,item.isolation,item.analysis, result]
                })

                const results = []
                results.push(buffer)
                setData(buffer)

            }, errorHandler)
    }


    useEffect(() => {


        reloadPendingLabConsultations();


    }, [])


    return (
        <React.Fragment>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <h1>
                    Pending LabConsultations
                </h1>
                <hr/>
            </Container>
            <Container component="main" maxWidth="md">
                <Grid container>
                    <Grid item md={12}>

                        <MUIDataTable title={"Pending LabConsultations"} data={data} columns={columns} options={options}/>

                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>

    )
}

export default PendingLabConsultations


