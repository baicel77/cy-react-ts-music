import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// 类组件与ts结合
interface IProps {
  name: string
  age?: number
}
interface IState {
  message: string
}
interface IReturn {
  height: number
}

class Demo2 extends PureComponent<IProps, IState, IReturn> {
  static propTypes = {
    name: PropTypes.string
  }
  state: IState = {
    message: '呵呵呵呵'
  }
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot: IReturn
  ): void {
    console.log(prevProps)
    console.log(prevState)
    console.log(snapshot.height)
  }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
  getSnapshotBeforeUpdate(): IReturn {
    return {
      height: 188
    }
  }
}

export default Demo2
