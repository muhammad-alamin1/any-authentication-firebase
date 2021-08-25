import React, { useContext } from 'react';
import { userContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        textAlign: 'center',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



const UserInfo = () => {
    const [user, setUser] = useContext(userContext);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="mx-auto col-6">
            <Card className={classes.root}>
                <CardHeader
                    title={user.displayName}
                // subheader={user.metadata.creationTime}
                />
                <CardMedia
                    className={classes.media}
                    image={user.photoURL}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {user.email}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Other Info</Typography>
                        <Typography paragraph>
                            {`PhotoURL: ${user.photoURL}`}
                            {/* {`Creation Sign In: ${user.metadata.creationTime}`} */}
                            <br />
                            {/* {`Last Sign In: ${user.metadata.lastSignInTime}`} */}
                        </Typography>
                        <Typography paragraph>
                            {/* {`Phone: ${user.multiFactor.phoneNumber || null}`} */}
                            <br />
                            {/* {`Login app: ${user.b.D}`} */}
                            <br />
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}


export default UserInfo;