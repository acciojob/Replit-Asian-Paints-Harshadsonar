//your JS code here. If required.
cy.get(".grid-container").find(".grid-item").eq(2).should("have.css", "background-color", "rgb(255, 0, 0)", { timeout: 5000 });

