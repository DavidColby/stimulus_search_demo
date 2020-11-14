import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "results", "form" ]

  connect() {
    console.log("Connected!")
  }

  search() {
    Rails.fire(this.formTarget, 'submit')
  }

  handleResults() {
    const [data, status, xhr] = event.detail
    this.resultsTarget.innerHTML = xhr.response
  }
}
