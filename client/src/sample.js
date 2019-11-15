<form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Message:
            <input
              type="textarea"
              name="message"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <p>name : {this.state.name}</p>
          <br />
          <p>email : {this.state.email}</p>
          <br />
          <p>message : {this.state.message}</p>
        </div>
        