import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_REMOVEWARNMEMBER_REQUEST } from '../../../../redux/types';
import './WarnCardBlock.scss';

const sex = {
    1: '남',
    2: '여',
};

const WarnCardBlock = () => {
    const dispatch = useDispatch();
    const [ShowEmpty, setShowEmpty] = useState("");
    const { warnlistDetail } = useSelector((state) => state.auth);


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

    let removeFromlist = (id) => {
        const body = {
            token: localStorage.getItem('token'),
            id: id,
        };

        dispatch({
            type: MEMBER_REMOVEWARNMEMBER_REQUEST,
            payload: body,
        });
       
    };

    const renderItems = () =>
    warnlistDetail &&
    warnlistDetail.map((warnlist, index) => (
            <tr key={index}>
                <td>
                    <img style={{ width: '70px' }} alt="product" src={renderCartImage(warnlist.images)} data-testid='warn-image'/>
                </td>
                <td  data-testid='warn-name'>{warnlist.name}</td>
                <td  data-testid='warn-sex'>{sex[warnlist.sex]}</td>
                <td  data-testid='warn-quantity'>{warnlist.quantity}</td>
                <td  data-testid='warn-age'>{warnlist.age}</td>
                <td>
                    <button onClick={() => removeFromlist(warnlist._id)} data-testid='warn-button'>Remove</button>
                </td>
            </tr>
        ));

    return (
        <div>
            <br />
            {ShowEmpty ? (
                <table>
                    <thead>
                        <tr>
                            <th>프로필</th>
                            <th>이름</th>
                            <th>성별</th>
                            <th>경고 횟수</th>
                            <th>나이</th>
                            <th>삭제</th>
                        </tr>
                    </thead>

                    <tbody>{renderItems()}</tbody>
                </table>
            ) : (
                <div>데이터가 없습니다.</div>
            )}
        </div>
    );
};

export default WarnCardBlock;
