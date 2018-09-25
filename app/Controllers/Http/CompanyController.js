'use strict'

/**
 * Resourceful controller for interacting with companies
 */
class CompanyController {
  /**
   * Show a list of all companies.
   * GET companies
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new company.
   * GET companies/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new company.
   * POST companies
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single company.
   * GET companies/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing company.
   * GET companies/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update company details.
   * PUT or PATCH companies/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a company with id.
   * DELETE companies/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CompanyController
