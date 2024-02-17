import React from 'react'
import './Product.css'
import { product } from '../../datas'
import Chart from '../../Components/chart/Chart'
import { Link } from 'react-router-dom'
import { productsData } from '../../datas'
import { useParams } from 'react-router-dom'
import { FaMandalorian } from "react-icons/fa6";
export default function Product() {
    let params = useParams()
    let MainItem = product.find(product => product.id == params.productID)
    // console.log(MainItem)
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className='productTitle'>Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title="Sales in mounth" data={productsData} dataKey='sale'>
                    </Chart>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className='productInfoImg' src={MainItem.img} />
                        <span className="productName">
                            {MainItem.name}
                        </span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID:</div>
                            <div className="productInfoValue">{MainItem.id}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Model:</div>
                            <div className="productInfoValue">{MainItem.title}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">In Stock:</div>
                            <div className="productInfoValue">yes</div>
                        </div>
                    </div>
                    <hr />
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">{MainItem.price}</div>
                        </div>
                    </div>
                    <hr />
                    <div className="productInfoBottom">
                        <div className="productInfoItem1">
                            <div className="productInfoKey">Info:</div><br />
                            <div className="productInfoValue">{MainItem.content}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className='productForm'>
                    <div className="productFormLeft">
                        <label> product Name</label>
                        <input type="text" placeholder='Dell Laptop' />
                        <label>In Stock</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUploader">
                            <img src={MainItem.img} className='productUploadImg' />
                            <label>
                                <FaMandalorian className='icon1' />
                            </label>
                            <input type="file" style={{display:"none"}}/>
                        </div>
                        <button className='productBtn'>Upload (Edit)</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
