export class Logout {
    getLogout () {
        cy.get("[data-element-type='burger-menu']").click();
    }

    userLoguot () {
        cy.contains("Log out").click();
    }
}