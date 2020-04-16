// 1 导入组件
import {HashRouter, Link, Route} from 'react-router-dom';
import React from 'react';
import Home from '../components/Home';
import PageSet from '../components/PageSet';
import ElementSet from '../components/ElementSet';
import DataSet from '../components/DataSet';
import DataSourceSet from '../components/DataSourceSet';
import IframeSet from '../components/IframeSet';
import logo from '../logo.svg';

class Router extends React.Component{

    render(){
        return (
            <HashRouter >

                {/*<div style={{backgroundColor:'#282c34',height:100}}/>*/}
                {/* 设置 Link*/}
                <div className="form-inline">
                    <div className="list-group" style={{width:200,marginTop:'0px'}}>
                        <Link className="list-group-item list-group-item-action" to="/">首页</Link>
                        <Link className="list-group-item list-group-item-action" to="/page">页面设置</Link>
                        <Link className="list-group-item list-group-item-action" to="/element">元素设置</Link>
                        <Link className="list-group-item list-group-item-action" to="/data">数据设置</Link>
                        <Link className="list-group-item list-group-item-action" to="/dataSource">数据元设置</Link>
                        <Link className="list-group-item list-group-item-action" to="/iframe">iframe设置</Link>
                    </div>
                    {/* 设置 Route*/}
                    {/* exact 表示：绝对匹配（完全匹配，只匹配）*/}
                    <Route exact path="/" component={Home}/>
                    <Route path="/page" component={PageSet}/>
                    <Route path="/element" component={ElementSet}/>
                    <Route path="/data" component={DataSet}/>
                    <Route path="/dataSource" component={DataSourceSet}/>
                    <Route path="/iframe" component={IframeSet}/>
                </div>


            </HashRouter>
        );
    }

}

export default Router;
