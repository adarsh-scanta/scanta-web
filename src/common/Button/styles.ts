import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#EB7A02"};
  color: ${(p) => (p.color ? "#EB7A02" : "#fff")};
  font-size: 1rem;
  width: ${(p) => p.width || "#EB7A02"};
  font-weight: 700;
  border: ${(p) => p.border || "1px solid #EB7A02"};
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  // border-radius: 80px;
  animation: ${(p) =>
    p.pulse
      ? "borderPulse 1000ms infinite ease-out, 1000ms infinite ease-in, hoverShine 200ms"
      : ""};
  &:hover,
  &:active,
  &:focus {
    animation: borderPulse 1000ms infinite ease-out, 1000ms infinite ease-in,
      hoverShine 200ms;
  }

  @keyframes borderPulse {
    0% {
      box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255, 0.4),
        0px 0px 0px 0px rgba(255, 255, 255, 1);
    }
    100% {
      box-shadow: inset 0px 0px 0px 3px rgba(255, 144, 25, 0.4),
        0px 0px 0px 10px rgba(255, 255, 255, 0.4);
    }
  }

  @keyframes hoverShine {
    0% {
      background-image: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    50% {
      background-image: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    100% {
      background-image: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 0.4) 100%
      );
    }
  }
`;
