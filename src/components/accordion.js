import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import moon from '../images/moon1.svg'
import moon2 from '../images/moon2.svg'
import moon3 from '../images/moon3.svg'
import { orange } from '@material-ui/core/colors';
import '../components/model.css'

const Accordion = withStyles({
    root: {
        width:10000,
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: '0',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        fontFamily: "TitilliumWeb",
        fontSize: 18,
        fontWeight: 600,
        color: "#fe5814",
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        display:"flex",
        alignItems:"start",
        textAlign:"left",
        justifyContent:"space-around",
        width:1000,
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
    <div className="moon">
        <div class="scrollbar" id="style-4">
            <div class="force-overflow"></div>
        </div>
        <div className="acc1">
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography style={{color:"black",fontSize:27}} >Full Time Model</Typography>
            </AccordionSummary>
        <AccordionSummary>
            <Typography>1 of 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of.
            </Typography>
            <Typography>
                <img style={{}} src={moon} alt=""/>
            </Typography>
        </AccordionDetails>
        </Accordion>
        </div>
        <div className="acc2">
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            
            <Typography style={{color:"black",fontSize:27}} >Part Time Model</Typography>
        </AccordionSummary>
        <AccordionSummary>
            <Typography>2 of 3</Typography>s
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            <Typography>
                <img style={{}} src={moon2} alt=""/>
            </Typography>
        </AccordionDetails>
        </Accordion>
        </div>
        <div className="acc3">
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            
            <Typography style={{color:"black",fontSize:27}} >Hybrid Model</Typography>
        </AccordionSummary>
        <AccordionSummary>
            <Typography>3 of 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            <Typography>
                <img style={{}} src={moon3} alt=""/>
            </Typography>
        </AccordionDetails>
        </Accordion>
        </div>
        
    </div>
    );
}
