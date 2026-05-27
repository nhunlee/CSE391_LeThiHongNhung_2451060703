// File: src/ProductInfo.jsx
function ProductInfo() {
    return (
        <div className="product"> {/* Đổi class thành className */}
            <h2>iPhone 15</h2>
            <p className="price">25.000.000đ</p> {/* Đổi class thành className */}
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;