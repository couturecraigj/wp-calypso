/** @format */

/**
 * External dependencies
 */

import React, { Component, Fragment } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import CreditCard from '..';

class CreditCards extends Component {
	state = {
		cards: [
			{
				lastDigits: '4242',
				cardType: 'visa',
				name: 'James Smith',
				expiry: '05/23',
			},
			{
				lastDigits: '4444',
				cardType: 'mastercard',
				name: 'Jean Davis',
				expiry: '01/21',
			},
		],
	};

	render() {
		return (
			<Fragment>
				{ this.state.cards.map( ( card, i ) => (
					<CreditCard key={ `${ card.lastDigits }_${ i }` } card={ card } selected={ 0 === i } />
				) ) }
				<CreditCard>
					<div style={ { padding: 20 } }>
						{ this.props.translate( 'Add another credit card...' ) }
					</div>
				</CreditCard>
			</Fragment>
		);
	}
}

const LocalizedCreditCards = localize( CreditCards );
LocalizedCreditCards.displayName = 'CreditCard';

export default LocalizedCreditCards;
