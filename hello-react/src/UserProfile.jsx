// File: src/UserProfile.jsx
function UserProfile() {
    return (
        <div className="profile"> {/* Đổi class thành className */}
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" /> {/* Thêm dấu / để tự đóng thẻ */}
            <table>
                <tbody> {/* Trong JSX, nên bọc các hàng tr bên trong tbody */}
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;