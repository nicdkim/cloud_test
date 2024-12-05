import { useState, useEffect } from "react";
import axios from 'axios';

const Menupage = () => {
    // 데이터를 저장할 상태 선언
    const [menuList, setMenuList] = useState([]);
    const [error, setError] = useState(null);

    // 서버에서 데이터를 가져오는 함수
    const fetchMenuData = async () => {
        try {
            const response = await axios.get('https://namewallet.store:6816/menu/select');
            setMenuList(response.data);
            console.log("response.data : ", response.data);
        } catch (err) {
            setError(err.message);
            console.error("데이터 가져오는 중 오류 발생:", err);
        }
    };

    // 컴포넌트가 마운트될 때 데이터 가져오기
    useEffect(() => {
        fetchMenuData();
    }, []);

    return (
        <div>
            <h1>우리가 메뉴를 불러와서 보여줄 페이지</h1>
            
            {/* 에러가 있을 경우 에러 메시지 표시 */}
            {error && <p style={{ color: "red" }}>오류: {error}</p>}
            
            {/* 데이터를 화면에 출력 */}
            <ul>
                {menuList.length > 0 ? (
                    menuList.map((menu, index) => (
                        <li key={index}>
                            <strong>{menu.menuName}</strong>
                        </li>
                    ))
                ) : (
                    !error && <p>로딩 중이거나 표시할 데이터가 없습니다.</p>
                )}
            </ul>
        </div>
    );
};

export default Menupage;
