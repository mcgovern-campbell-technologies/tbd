import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Text from '../../../shared/forms/Text';

const SearchMember = () => (
  <div className="pa4 border-a mb4">
    <h4 className="ma0">Search</h4>
    <div className="flex flex-row justify-between">
      <Field
        name="trade"
        label="Trade"
        fullWidth={false}
        component={Text}
        className="flex-1 mr4"
      />
      <Field
        name="positionLevel"
        label="Position Level"
        fullWidth={false}
        component={Text}
        className="flex-1 mr4"
      />
      <Field
        name="rating"
        label="Rating"
        fullWidth={false}
        component={Text}
        className="flex-1"
      />
    </div>
  </div>
)

export default reduxForm({
  form: 'searchMember',
})(SearchMember);
