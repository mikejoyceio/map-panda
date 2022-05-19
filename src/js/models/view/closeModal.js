/**
 * @file Close the modal
 */

function closeModal(viewModel) {
  viewModel.modalVisibilty(false);
  viewModel.modalInfoImageVisibility(false);
  viewModel.modalFoursquareVisibility(false);
  viewModel.modalUberEstimateVisibility(false);
}

export default closeModal;
