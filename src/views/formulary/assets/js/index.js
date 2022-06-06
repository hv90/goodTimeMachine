const quality = [
  { value: "amateur", group: 0 },
  { value: "professional", group: 1 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const voice = [
  { value: "f: soprano", group: 0 },
  { value: "f: mezzo-soprano", group: 0 },
  { value: "f: contralto", group: 0 },
  { value: "f: mild dysphonia", group: 1 },
  { value: "f: severe dysphonia", group: 1 },
  { value: "m: tenor", group: 2 },
  { value: "m: baritone", group: 2 },
  { value: "m: bass", group: 2 },
];

const extension = [
  { value: "movie", group: 0 },
  { value: "picture", group: 1 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const job = [
  { value: "", group: 0 },
  { value: "worker", group: 1 },
  { value: "student", group: 2 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const age = [
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: "", group: 0 },
  { value: "", group: 1 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const sexuality = [
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: ", ", group: 0 },
  { value: ", ", group: 0 },
  { value: ", ", group: 1 },
  { value: ", ", group: 1 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const duration = [
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: "", group: 2 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const toFixes = [
  { value: "bugs", group: 0 },
  { value: "toMute", group: 0 },
  { value: "toReorder", group: 0 },
  { value: "toSync", group: 0 },
  { value: "none", group: 0 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const medias = [
  { value: "tv-series", group: 0 },
  { value: "movie", group: 1 },
  { value: "theater", group: 1 },
  { value: "documentary", group: 2 },
  { value: "interview", group: 2 },
  { value: "chat", group: 2 },
  { value: "tv-show", group: 0 },
  { value: "compilation", group: 3 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const relationships = [
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 3 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const tags = [
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 4 },
  { value: "", group: 5 },
  { value: "", group: 5 },
  { value: "", group: 5 },
  { value: "", group: 5 },
  { value: "", group: 5 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const actions = [
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: " ", group: 0 },
  { value: " ", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const moods = [
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 0 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 1 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 2 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
  { value: "", group: 3 },
].sort(function (a, b) {
  if (a.group === b.group) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
  }
  return 0;
});

const radialInputElementRender = (arrayComponent, stringName) => {
  arrayComponent.map((el, index) => {
    let arrayNodeInputGroup = document.getElementById(
      `${stringName}-input-group-${el.group}`
    );
    if (!arrayNodeInputGroup) {
      arrayNodeInputGroup = document.createElement("div");
      arrayNodeInputGroup.id = `${stringName}-input-group-${el.group}`;
      if (el.group > 0) arrayNodeInputGroup.style.marginLeft = "30px";
      document
        .getElementById(`${stringName}-field`)
        .appendChild(arrayNodeInputGroup);
    }

    const arrayNodeInputContainer = document.createElement("div");
    arrayNodeInputContainer.id = `${stringName}-input-container-${index}`;
    document
      .getElementById(`${stringName}-input-group-${el.group}`)
      .appendChild(arrayNodeInputContainer);

    const arrayNodeInput = document.createElement("input");
    arrayNodeInput.type = "radio";
    arrayNodeInput.name = stringName;
    arrayNodeInput.value = el.value;
    arrayNodeInput.id = `${stringName}-${index}`;
    arrayNodeInput.required = true;
    document
      .getElementById(`${stringName}-input-container-${index}`)
      .appendChild(arrayNodeInput);

    const arrayNodeLabel = document.createElement("label");
    arrayNodeLabel.for = `${stringName}-${index}`;
    arrayNodeLabel.id = `${stringName}-label-${index}`;
    document
      .getElementById(`${stringName}-input-container-${index}`)
      .appendChild(arrayNodeLabel);

    document.getElementById(
      `${stringName}-label-${index}`
    ).innerHTML = ` ${el.value}`;
  });
};

const checkboxInputElementRender = (arrayComponent, stringName) => {
  arrayComponent.map((el, index) => {
    let arrayNodeInputGroup = document.getElementById(
      `${stringName}-input-group-${el.group}`
    );
    if (!arrayNodeInputGroup) {
      arrayNodeInputGroup = document.createElement("div");
      arrayNodeInputGroup.id = `${stringName}-input-group-${el.group}`;
      if (el.group > 0) arrayNodeInputGroup.style.marginLeft = "30px";
      document
        .getElementById(`${stringName}-field`)
        .appendChild(arrayNodeInputGroup);
    }

    const arrayNodeInputContainer = document.createElement("div");
    arrayNodeInputContainer.id = `${stringName}-input-container-${index}`;
    document
      .getElementById(`${stringName}-input-group-${el.group}`)
      .appendChild(arrayNodeInputContainer);

    const arrayNodeInput = document.createElement("input");
    arrayNodeInput.type = "checkbox";
    arrayNodeInput.name = stringName;
    arrayNodeInput.id = `${stringName}-${index}`;
    arrayNodeInput.value = el.value;
    // arrayNodeInput.required = true;
    document
      .getElementById(`${stringName}-input-container-${index}`)
      .appendChild(arrayNodeInput);

    const arrayNodeLabel = document.createElement("label");
    arrayNodeLabel.for = `${stringName}-${index}`;
    arrayNodeLabel.id = `${stringName}-label-${index}`;
    document
      .getElementById(`${stringName}-input-container-${index}`)
      .appendChild(arrayNodeLabel);

    document.getElementById(
      `${stringName}-label-${index}`
    ).innerHTML = ` ${el.value}`;
  });
};

const textInputElementRender = (stringName) => {
  const REQUIRED_ELEMENTS = ["filePath"];

  const textNodeInputContainer = document.createElement("div");
  textNodeInputContainer.id = `${stringName}-input-container`;
  document
    .getElementById(`${stringName}-field`)
    .appendChild(textNodeInputContainer);

  const textNodeInput = document.createElement("input");
  textNodeInput.type = "text";
  textNodeInput.name = stringName;
  textNodeInput.id = `${stringName}`;
  textNodeInput.required = REQUIRED_ELEMENTS.includes(stringName);
  document
    .getElementById(`${stringName}-input-container`)
    .appendChild(textNodeInput);
};

radialInputElementRender(quality, "quality");
radialInputElementRender(voice, "voice");
radialInputElementRender(extension, "extension");
radialInputElementRender(job, "job");
radialInputElementRender(age, "age");
radialInputElementRender(sexuality, "sexuality");
radialInputElementRender(duration, "duration");

checkboxInputElementRender(toFixes, "toFixes");
checkboxInputElementRender(medias, "medias");
checkboxInputElementRender(relationships, "relationships");
checkboxInputElementRender(tags, "tags");
checkboxInputElementRender(actions, "actions");
checkboxInputElementRender(moods, "moods");

textInputElementRender("modelName");
textInputElementRender("quickTip");
textInputElementRender("filePath");
