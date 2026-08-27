(() => {
  "use strict";

  const storageKey = "xinye-visual-mode";
  const body = document.body;
  const avatar = document.getElementById("sidebar-profile-avatar");
  const defaultAvatar = avatar?.dataset.defaultSrc;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const triggers = Array.from(
    new Set([
      ...document.querySelectorAll("[data-easter-mode]"),
      ...document.querySelectorAll("[data-matrix-trigger]"),
      document.getElementById("matrix-toggle"),
    ].filter(Boolean)),
  );

  const modes = {
    matrix: {
      bodyClass: "matrix-mode",
      avatar: avatar?.dataset.avatarMatrix || avatar?.dataset.matrixSrc,
      fontSize: 16,
      glyphs: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-=<>/\\\\|{}[]",
      setup({ width, fontSize }) {
        return {
          columns: Array.from({ length: Math.ceil(width / fontSize) }, () => Math.floor(Math.random() * -40)),
        };
      },
      draw({ context: ctx, state, width, height, fontSize, glyphs }) {
        ctx.fillStyle = "rgba(2, 9, 6, 0.1)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${fontSize}px monospace`;

        state.columns.forEach((drop, index) => {
          const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
          ctx.fillStyle = index % 13 === 0 ? "#d9ffe5" : "#4cff86";
          ctx.fillText(glyph, index * fontSize, drop * fontSize);
          state.columns[index] = drop * fontSize > height && Math.random() > 0.972 ? 0 : drop + 1;
        });
      },
    },
    cyberpunk: {
      bodyClass: "cyberpunk-mode",
      avatar: avatar?.dataset.avatarCyberpunk,
      fontSize: 18,
      glyphs: "01<>[]{}:/#NIGHTCITY",
      setup({ width, height }) {
        return {
          sparks: Array.from({ length: Math.ceil(width / 34) }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            speed: 1.4 + Math.random() * 3.2,
            length: 18 + Math.random() * 58,
            hue: Math.random() > 0.45 ? "#00e5ff" : "#ff2ec4",
          })),
          scanline: 0,
        };
      },
      draw({ context: ctx, state, width, height }) {
        ctx.fillStyle = "rgba(8, 5, 22, 0.18)";
        ctx.fillRect(0, 0, width, height);

        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "rgba(0, 229, 255, 0.16)");
        gradient.addColorStop(0.5, "rgba(255, 46, 196, 0.12)");
        gradient.addColorStop(1, "rgba(255, 212, 59, 0.1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        state.scanline = (state.scanline + 5) % height;
        ctx.fillStyle = "rgba(255, 212, 59, 0.22)";
        ctx.fillRect(0, state.scanline, width, 2);

        state.sparks.forEach((spark) => {
          ctx.strokeStyle = spark.hue;
          ctx.lineWidth = 1.2;
          ctx.shadowColor = spark.hue;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(spark.x, spark.y);
          ctx.lineTo(spark.x - spark.length, spark.y + spark.length * 0.35);
          ctx.stroke();

          spark.x += spark.speed * 1.6;
          spark.y -= spark.speed * 0.35;
          if (spark.x > width + spark.length || spark.y < -spark.length) {
            spark.x = -spark.length;
            spark.y = Math.random() * height;
          }
        });

        ctx.shadowBlur = 0;
      },
    },
  };

  canvas.id = "easter-effect-canvas";
  canvas.setAttribute("aria-hidden", "true");
  body.prepend(canvas);

  let animationFrame;
  let activeMode = null;
  let pinnedMode = readPinnedMode();
  let effectState = null;

  function readPinnedMode() {
    try {
      const storedMode = window.sessionStorage.getItem(storageKey);
      return modes[storedMode] ? storedMode : null;
    } catch (error) {
      return null;
    }
  }

  function writePinnedMode(modeName) {
    pinnedMode = modeName;

    try {
      if (modeName) {
        window.sessionStorage.setItem(storageKey, modeName);
      } else {
        window.sessionStorage.removeItem(storageKey);
      }
    } catch (error) {
      // Storage can be unavailable in strict privacy modes; the visual mode still works in-page.
    }
  }

  function syncTriggerStates() {
    triggers.forEach((trigger) => {
      trigger.setAttribute("aria-pressed", String(trigger.dataset.easterMode === activeMode));
    });
  }

  function resizeCanvas() {
    if (!activeMode) return;

    const mode = modes[activeMode];
    const ratio = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    effectState = mode.setup({ width, height, fontSize: mode.fontSize });
  }

  function drawEffect() {
    if (!activeMode || reducedMotion) return;

    const mode = modes[activeMode];
    mode.draw({
      context,
      state: effectState,
      width: window.innerWidth,
      height: window.innerHeight,
      fontSize: mode.fontSize,
      glyphs: mode.glyphs,
    });
    animationFrame = window.requestAnimationFrame(drawEffect);
  }

  function stopEffect() {
    window.cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resizeCanvas);
    canvas.className = "";
    context.clearRect(0, 0, canvas.width, canvas.height);
    effectState = null;
  }

  function applyAvatar(modeName) {
    if (!avatar || !defaultAvatar) return;

    const nextAvatar = modeName ? modes[modeName]?.avatar : defaultAvatar;
    if (nextAvatar) {
      avatar.src = nextAvatar;
    }
  }

  function setVisualMode(modeName) {
    if (modeName && !modes[modeName]) return;
    if (activeMode === modeName) {
      syncTriggerStates();
      return;
    }

    if (activeMode) {
      body.classList.remove(modes[activeMode].bodyClass);
      stopEffect();
    }

    activeMode = modeName;
    if (activeMode) {
      body.classList.add(modes[activeMode].bodyClass);
      canvas.classList.add("is-visible", `is-${activeMode}`);
      applyAvatar(activeMode);

      if (!reducedMotion) {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        drawEffect();
      }
    } else {
      applyAvatar(null);
    }

    syncTriggerStates();
  }

  triggers.forEach((trigger) => {
    const modeName = trigger.dataset.easterMode || "matrix";

    trigger.addEventListener("mouseenter", () => setVisualMode(modeName));
    trigger.addEventListener("mouseleave", () => {
      setVisualMode(pinnedMode);
    });
    trigger.addEventListener("focus", () => setVisualMode(modeName));
    trigger.addEventListener("blur", () => {
      setVisualMode(pinnedMode);
    });
    trigger.addEventListener("click", () => {
      const nextPinnedMode = pinnedMode === modeName ? null : modeName;
      writePinnedMode(nextPinnedMode);
      setVisualMode(nextPinnedMode);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeMode) {
      writePinnedMode(null);
      setVisualMode(null);
      document.activeElement?.blur();
    }
  });

  setVisualMode(pinnedMode);
})();
