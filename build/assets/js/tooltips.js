var buttons = document.querySelectorAll("[data-target='tooltip_trigger']");

buttons.forEach((button) => {
  var tooltip = button.nextElementSibling;
  var placement = button.getAttribute("data-placement");

  const popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: placement,
  });

  function show() {
    // Make the tooltip visible
    tooltip.classList.remove("hidden");
    tooltip.classList.add("block");

    // Enable the event listeners
    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [...options.modifiers, { name: "eventListeners", enabled: true }],
    }));

    // Update its position
    popperInstance.update();
  }

  function hide() {
    // Hide the tooltip

    tooltip.classList.remove("block");
    tooltip.classList.add("hidden");

    // Disable the event listeners
    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [...options.modifiers, { name: "eventListeners", enabled: false }],
    }));
  }

  const showEvents = ["mouseenter", "focus"];
  const hideEvents = ["mouseleave", "blur"];

  showEvents.forEach((event) => {
    button.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    button.addEventListener(event, hide);
  });
});
