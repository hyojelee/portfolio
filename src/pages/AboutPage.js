import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

class AboutPage extends React.Component{
    render(){
        return(
                <div>
                    <Hero title={this.props.title}></Hero>
                    <Content>
                    <p>write about me</p>
                    <p>write about me</p>
                    <p>write about me</p>
                    <p>write about me</p>
                    <p>write about me</p>
                    <p>write about me</p>
                    <p>write about me</p>
                     </Content>
                </div>
            );
    }
}

export default AboutPage;