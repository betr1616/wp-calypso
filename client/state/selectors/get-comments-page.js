/**
 * External dependencies
 */

import { get } from 'lodash';

/**
 * Internal dependencies
 */
import { getFiltersKey } from 'state/ui/comments/utils';

/**
 * Returns a list of comment IDs for the requested page and filters.
 *
 * @param {object} state Redux state.
 * @param {Number} siteId Site identifier.
 * @param {object} query Filter parameters.
 * @param {string} [query.order] Query order ('ASC' or 'DESC').
 * @param {Number} [query.page] Requested page.
 * @param {Number} [query.postId] Post identifier.
 * @param {string} [query.search] Search query.
 * @param {string} [query.status] Comments status.
 * @returns {Array} List of comment IDs for the requested page and filters.
 */
export const getCommentsPage = ( state, siteId, query ) => {
	const { page = 1, postId } = query;
	const parent = postId || 'site';
	const filter = getFiltersKey( query );
	return get( state, [ 'ui', 'comments', 'queries', siteId, parent, filter, page ] );
};

export default getCommentsPage;
