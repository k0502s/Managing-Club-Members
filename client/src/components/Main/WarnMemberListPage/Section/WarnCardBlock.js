import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Collapse from '@material-ui/core/Collapse';
import { BsFillTrashFill, BsChevronDown, BsChevronUp, BsReply } from 'react-icons/bs';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { CardBody } from 'reactstrap';
import { MEMBER_REMOVEWARNMEMBER_REQUEST, MEMBER_DELETE_REQUEST } from '../../../../redux/types';
import * as S from '../WarnMemberListPage.style';

const sex = {
    1: '남',
    2: '여',
};

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const WarnCardBlock = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ShowEmpty, setShowEmpty] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = React.useState(false);
    const { warnlistDetail } = useSelector((state) => state.auth);

    const handleClick = (index) => {
        setSelectedIndex(index);
        setOpen(!open);
    };

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0];
            return `${image}`;
        }
    };

    useEffect(() => {
        if (warnlistDetail.length <= 0 || undefined) {
            setShowEmpty(false);
        } else {
            setShowEmpty(true);
        }
    }, [warnlistDetail]);

    let deleteFromlist = (id) => {
        const body = {
            token: localStorage.getItem('token'),
            id: id,
        };

        dispatch({
            type: MEMBER_REMOVEWARNMEMBER_REQUEST,
            payload: body,
        });
    };

    const deleteMemberData = (id) => {
        const body = {
            token: localStorage.getItem('token'),
            id: id,
        };
        dispatch({
            type: MEMBER_DELETE_REQUEST,
            payload: id,
        });
        dispatch({
            type: MEMBER_REMOVEWARNMEMBER_REQUEST,
            payload: body,
        });
    };

    const renderItems = () =>
        warnlistDetail &&
        warnlistDetail.map((warnlist, index) => (
            <S.link onClick={() => handleClick(index)} key={index}>
                <S.listItem button>
                    <ListItemAvatar>
                        <Avatar>
                            <S.Img src={renderCartImage(warnlist.images)} data-testid="warn-image" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="이름" secondary={warnlist.name} data-testid="warn-name" />
                    <ListItemText primary="성별" secondary={sex[warnlist.sex]} data-testid="warn-sex" />
                    <ListItemText primary="나이" secondary={warnlist.age} data-testid="warn-age" />
                    <ListItemText primary="경고" secondary={warnlist.quantity} data-testid="warn-quantity" />
                    {open ? <BsChevronUp /> : <BsChevronDown />}
                </S.listItem>
                <Divider variant="inset" />
                <Collapse in={selectedIndex === index && open} timeout="auto" unmountOnExit>
                    <S.link component="div" disablePadding>
                        <ListItem button className={classes.nested} onClick={() => deleteFromlist(warnlist._id)} data-testid="warn-button">
                            <ListItemIcon>
                                <BsReply />
                            </ListItemIcon>
                            <ListItemText primary="경고 해제" />
                        </ListItem>
                        <ListItem button className={classes.nested} onClick={() => deleteMemberData(warnlist._id)} data-testid="warn-button">
                            <ListItemIcon>
                                <BsFillTrashFill />
                            </ListItemIcon>
                            <ListItemText primary="영구 제명" />
                        </ListItem>
                    </S.link>
                </Collapse>
            </S.link>
        ));

    return (
        <div>
            <br />
            {ShowEmpty ? <>{renderItems()}</> : <div>데이터가 없습니다.</div>}
        </div>
    );
};

export default WarnCardBlock;
