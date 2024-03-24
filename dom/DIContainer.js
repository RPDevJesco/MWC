// Dependency Injection Container
class DIContainer {
    constructor() {
        this.dependencies = {};
    }

    register(name, dependency) {
        this.dependencies[name] = dependency;
    }

    resolve(name) {
        if (!this.dependencies[name]) {
            throw new Error(`Dependency ${name} not found`);
        }
        return this.dependencies[name];
    }
}