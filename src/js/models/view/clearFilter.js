/**
 * @file Clear search filter
 */

function clearFilter(viewModel, data, event) {

  /** Clear the filter input */
  viewModel.searchQuery('');

  /** Loops through each place type in the place list and show it */
  for (var i=0,j=viewModel.placeList().length;i<j;i++) {
    viewModel.placeList()[i].isHidden(false);
  }
}

export default clearFilter;
