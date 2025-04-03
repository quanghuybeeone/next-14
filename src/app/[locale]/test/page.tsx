import React from 'react';

const SearchResultPage = () => {
  return (
    <div className="bg-[#FAF2E6] p-6">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-white p-4 shadow-md rounded mb-4">
        <h1 className="text-2xl font-bold">PHONG THỦY ĐẠI NAM</h1>
        <div className="flex items-center">
          <a href="#" className="mr-4">Giới thiệu</a>
          <a href="#" className="mr-4">Dịch vụ</a>
          <a href="#" className="mr-4">Đào tạo</a>
          <a href="#" className="mr-4">Vật phẩm</a>
          <a href="#" className="mr-4">Dự án</a>
          <a href="#" className="mr-4">Tin tức</a>
          <a href="#" className="mr-4">Tiện ích</a>
          <button className="bg-red-500 text-white px-3 py-2 rounded-lg">Liên hệ</button>
        </div>
      </header>

      {/* Search Section */}
      <div>
        <h2 className="text-xl mb-2">Kết quả tìm kiếm 123</h2>
        <input
          type="text"
          placeholder="Phong thủy"
          className="border rounded-lg p-2 w-full mb-2"
        />
        <p className="mb-4">24 kết quả cho “Phong Thủy”</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4">Sản phẩm</button>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white rounded shadow-md p-4">
            <img
              src="path_to_image" // Replace with your product image path
              alt="Sản phẩm"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="font-bold">Bộ Bốc Độn</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="line-through text-red-500">4000000đ</p>
              <p className="font-bold">3500000đ</p>
            </div>
            <span className="text-red-500">-25%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;