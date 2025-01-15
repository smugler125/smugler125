<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SMUGGLER 𝗧𝗘𝗖𝗛 𝗦𝗘𝗦𝗦𝗜𝗢𝗡𝗦</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: blue; /* Black bars on top and bottom */
      color: green; /* Black text color */
      font-weight: bold; /* Bold font */
    }

    .content-wrapper {
      text-align: center;
      position: relative;
      z-index: 1;
    }

    .background-image {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      transform: translate(-50%, -50%);
      z-index: -1;
      max-height: 100%;
      max-width: 100%;
    }

    .btn {
      --color: blue; /* Text color inside button */
      --color2: black; /* Hover text color */
      width: 200px;
      padding: 0.8em 1.75em;
      background-color: white;
      border-radius: 6px;
      border: .3px solid var(--color);
      transition: .5s;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 1;
      font-weight: bold; /* Bold text inside button */
      font-size: 17px;
      font-family: 'Roboto', 'Segoe UI', sans-serif;
      text-transform: uppercase;
      color: var(--color);
      margin-bottom: 24px;
    }

    .btn::after, .btn::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      transform: skew(90deg) translate(-50%, -50%);
      position: absolute;
      inset: 50%;
      left: 25%;
      z-index: -1;
      transition: .5s ease-out;
      background-color: var(--color);
    }

    .btn::before {
      top: -50%;
      left: -25%;
      transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::before {
      transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::after {
      transform: skew(45deg) translate(-50%, -50%);
    }

    .btn:hover {
      color: var(--color2);
    }

    .btn:active {
      filter: brightness(.7);
      transform: scale(.98);
    }
  </style>
</head>
<body>

  <div class="content-wrapper">
    <img src="https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg" alt="Background Image" class="background-image">
    <div>
      <button onclick="window.open(`/wasiqr`)" class="btn">QR Code</button>
      <button onclick="window.open(`/pair`)" class="btn">Pair Code</button>
      <button onclick="window.open(`https://chat.whatsapp.com/GjWqThtXhff6AvNz94cHR9`)" class="btn">VPN GROUP</button>
      <button onclick="window.open(`https://wa.link/bfi6le`)" class="btn">Smuggler Tech 👻</button>
      <button onclick="window.open(`https://whatsapp.com/channel/0029Vautr9v4SpkKZ3kBJx11`)" class="btn">Wa Channel</button>
      <button onclick="window.open(`https://chat.whatsapp.com/GjWqThtXhff6AvNz94cHR9`)" class="btn">Xbot Group</button>
    </div>
  </div>

</body>
</html>