# Brutu-Bacem
Brutu Bacem is a GUI tool to brute force web login pages for testing purposes.

## Screnshot
<img width="700px" src="https://github.com/hangga/Brutu-Bacem/blob/main/brutu-baem-web-blur.png?raw=true"/>

## Tips and How to Use
- Searching for targets. You can use Google Dork.
- Inspect the element to find the input selector.
 
  **Example of using selectors in HTML:**

  ```
  <!-- HTML example for login form -->
  <form>
      <input type="text" name="username" id="usernameInput" />
      <input type="password" name="password" id="passwordInput" />
      <button type="submit">Login</button>
  </form>
  ```
  In this case, usersel might be `#usernameInput` and passsel might be `#passwordInput`. This tells the program that the **username** input element is identified with the ID `usernameInput` and the **password** input element is identified with the ID `passwordInput`. You need to adjust the selector according to the HTML structure of the actual login page you want to attack.

- Use the wordlist that you have. You can search on github.
- Determine delay and Start.
- Don't forget to use a proxy.

## Disclaimer
This tool is intended for educational purposes and penetration testing only. Unauthorized use for malicious purposes is strictly prohibited.
