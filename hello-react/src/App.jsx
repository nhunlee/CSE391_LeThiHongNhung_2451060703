// File: src/App.jsx
import UserProfile from './UserProfile';
import ProductInfo from './ProductInfo';

function App() {
    return (
        <div>
            <h1>Thực hành Bài 0.2: HTML thành JSX</h1>
            
            {/* Gọi component UserProfile ra dùng */}
            <UserProfile />
            
            <hr />
            
            {/* Gọi component ProductInfo ra dùng */}
            <ProductInfo />
        </div>
    );
}

export default App;