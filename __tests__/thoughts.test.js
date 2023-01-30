const request = require("request");
const URL = "http://localhost:3001";

describe("/api/thoughts", () => {
  let thoughtId;
  let userId;
  let username;

  beforeAll(() => { // wait for 5 seconds
    // code to run before all tests in this suite
    request.get(`${URL}/api/users`, (error, response, body) => {
      const users = JSON.parse(body);
      userId = users[0]._id;
      username = users[0].username;
    });
  });

  // Test GET all thoughts
  test("GET all thoughts", (done) => {
    request.get(`${URL}/api/thoughts`, (error, response, body) => {
      expect(response.statusCode).toBe(200);
      const thoughts = JSON.parse(body);
      expect(Array.isArray(thoughts)).toBe(true);
      thoughtId = thoughts[0]._id;
      done();
    });
  });

  // Test GET a specific thought
  test("GET a specific thought", (done) => {
    request.get(`${URL}/api/thoughts/${thoughtId}`, (error, response, body) => {
      expect(response.statusCode).toBe(200);
      const thought = JSON.parse(body);
      expect(thought._id).toBe(thoughtId);
      done();
    });
  });

  // Create a new Thought
  test("POST create a thought", (done) => {
    let newThought = {
      thoughtText: "This is a new thought",
      userId: userId,
      username: username,
    };
    request.post(
      {
        url: `${URL}/api/thoughts`,
        json: newThought,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const thought = body;
        thoughtId = thought._id;
        expect(thought.thoughtText).toBe(newThought.thoughtText);
        done();
      }
    );
  });

  // Test PUT update a thought
  test("PUT update a thought", (done) => {
    const update = { thoughtText: "updated thought" };
    request.put(
      {
        url: `${URL}/api/thoughts/${thoughtId}`,
        json: update,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const thought = body;
        expect(thought.thoughtText).toBe(update.thoughtText);
        done();
      }
    );
  });

  // Test reactions POST /api/thoughts/:thoughtId/reactions
  let reactionId;
  test("POST create a reaction", (done) => {
    let newReaction = {
      reactionBody: "This is a new reaction",
      username: username,
    };
    request.post(
      {
        url: `${URL}/api/thoughts/${thoughtId}/reactions`,
        json: newReaction,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const thought = body;
        expect(thought.reactions[0].reactionBody).toBe(
          newReaction.reactionBody
        );
        reactionId = thought.reactions[0].reactionId;
        done();
      }
    );
  });

  // Test reactions DELETE /api/thoughts/:thoughtId/reactions/:reactionId
  test("DELETE a reaction", (done) => {
    request.delete(
      `${URL}/api/thoughts/${thoughtId}/reactions/${reactionId}`,
      (error, response, body) => {
        const thought = JSON.parse(body);
        expect(response.statusCode).toBe(200);
        expect(thought.reactions.length).toBe(0);
        done();
      }
    );
  });

  // Test DELETE a thought
  test("DELETE a thought", (done) => {
    request.delete(
      `${URL}/api/thoughts/${thoughtId}`,
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const thought = JSON.parse(body);
        expect(thought._id).toBe(thoughtId);
        done();
      }
    );
  });
});
