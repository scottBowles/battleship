import cpuFactory from "./cpuFactory"

test("happy path", () => {
    const cpu = cpuFactory()
    expect(cpu.attack()).not.toBe(null)
})

test("happy path 2", () => {
    const cpu = cpuFactory()
    expect(cpu.attack()).not.toBeNaN()
})

test("with mock", () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;
    const cpu = cpuFactory()
    expect(cpu.attack()).toEqual(50)
})