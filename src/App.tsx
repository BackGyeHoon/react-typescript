import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import Item from './item';
import Hook from './hook';
import Canvas from './canvas';
import styled from 'styled-components';

const AppLink = styled.div<{ color: string }>`
    color: ${props => props.color};
    background-color: ${props => props.color === "black" ? "white" : "black"};
`;

interface IProps {
}

interface IState {
    second: number;
    count: number;
}

const itemChildren = <p>Hello World</p>;
class App extends React.Component<IProps, IState> {
    public readonly state = {
        second: 0,
        count: 0,
    };

    public constructor(porps: IProps) {
        super(porps);
        // this.increaseCount = this.increaseCount.bind(this);
    }

    private tickTimer: number = 0;

    public componentDidMount() {
        this.tickTimer = setInterval(() => this.tick(), 1000) as any;
    }

    public componentWillUnmount() {
        clearInterval(this.tickTimer);
    }

    public render() {
        return (
            <React.Fragment>
                <AppLink color="blue">Second: {this.state.second}</AppLink>
                <div className={styles.color}>Count: {this.state.count} <button onClick={this.increaseCount}>Up</button></div>
                <Item count={this.state.count}>
                    {itemChildren}
                </Item>
                <Hook />
                <Canvas />
            </React.Fragment>
        );
    }

    private increaseCount = () => {
        this.setState(state => ({
            count: this.state.count + 1,
        }));
    }

    private tick = () => {
        this.setState(state => ({
            second: this.state.second + 1,
        }));
    }
}

export default App;
