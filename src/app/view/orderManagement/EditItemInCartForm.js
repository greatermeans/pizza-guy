import React, { Component, } from 'react'
import { connect, } from 'react-redux'
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle'
import actions from '../../actions'
import AvFiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record'
import { AutoComplete, Chip, RadioButton, RadioButtonGroup, TextField, } from 'material-ui'
import _ from 'lodash'

class EditItemInCartForm extends Component {
  render() {
    const { setTeamColor, toggleTeamMember, setTeamName, teamManagement, } = this.props
    const { color, colors, employeesDataSource, editFormEmployeesDataSource, employees, name, } = teamManagement
    return (
      <div>
        <TextField
          floatingLabelFixed
          floatingLabelText={'Team Name'}
          onChange={(event, value) => setTeamName(value)}
          value={name}
        />
        <AutoComplete
          dataSource={editFormEmployeesDataSource || []}
          dataSourceConfig={{
            text: 'name',
            value: 'employeeId',
          }}
          filter={AutoComplete.caseInsensitiveFilter}
          floatingLabelText={'Search Technicians'}
          maxSearchResults={5}
          onNewRequest={data => {
            toggleTeamMember(parseInt(data.employeeId, 10))
            this.refs.autoComplete.setState({searchText: ''})
          }}
          ref={'autoComplete'}
        />
        <div style={styles.chipsContainer}>
        {
          employees.map(employeeId => {
            let employee = employeesDataSource.find(employee => employee.employeeId === (employeeId + ''))
            return !employee ? null : (
              <Chip
                key={employeeId}
                onRequestDelete={() => toggleTeamMember(employeeId)}
                style={styles.chip}
              >
                {employee.name}
              </Chip>
            )
          })
        }
        </div>
        <span>Choose Team Color:</span>
        <RadioButtonGroup
          name="teamColors"
          style={styles.radioButtonGroup}
          onChange={(event, value) => setTeamColor(value)}
          valueSelected={color}
        >
          {
            _.uniq([...colors, color]).map(color => (
              <RadioButton
                value={color}
                key={color}
                style={styles.radioButton}
                checkedIcon={<ActionCheckCircle style={{...styles.radioIconStyle, fill: color}}/>}
                uncheckedIcon={<AvFiberManualRecord style={{...styles.radioIconStyle, fill: color}}/>}
              />
            ))
          }
        </RadioButtonGroup>
      </div>
    )
  }
}

const styles = {
  chip: {
    margin: 2
  },
  chipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: 180,
    maxWidth: 350,
    overflowX: 'auto'
  },
  radioButton: {
    flex: 1,
    height: 40,
    maxWidth: 50,
    padding: 5,
    width: 40,
  },
  radioButtonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: 180,
    maxWidth: 350,
  },
  radioIconStyle: {
    height: 50,
    width: 50
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItemInCartForm)
